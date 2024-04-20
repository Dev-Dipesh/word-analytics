import { useState } from "react";
import Stats from "./Stats";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";
import TextArea from "./TextArea";
import useJokes from "../hooks/useJokes";

function App() {
  const [text, setText] = useState("");

  const { jokes, isLoading, error, fetchJokes } = useJokes();
  const [selectedCategory, setSelectedCategory] = useState("Any");

  const handleFetchClick = () => {
    fetchJokes(selectedCategory);
  };

  return (
    <main>
      <Header />
      <Container>
        <TextArea text={text} setText={setText} />
        <Stats text={text} />
      </Container>
      <Container>
        {isLoading && <Loading />}
        {error && <Error error={error} />}
        {jokes.length > 0 && (
          <>
            <div
              style={{
                padding: "1.3em",
                overflowY: "scroll",
                background: "#f3f3f3",
              }}
            >
              <JSONPrettyPrint data={jokes} />
            </div>
            <div
              style={{
                overflowY: "scroll",
              }}
            >
              <Jokes isLoading={isLoading} data={jokes} />
            </div>
          </>
        )}
      </Container>
      <select
        aria-label="Select joke category"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="Any">Any</option>
        <option value="Programming">Programming</option>
        <option value="Misc">Misc</option>
        <option value="Dark">Dark</option>
        <option value="Pun">Pun</option>
        <option value="Spooky">Spooky</option>
        <option value="Christmas">Christmas</option>
      </select>
      <button onClick={handleFetchClick}>Fetch Jokes</button>
      <Footer />
    </main>
  );
}

function Loading() {
  return <div>Loading...</div>;
}

function Error({ error }) {
  return <p>Error: {error}</p>;
}

function JSONPrettyPrint({ data }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

function Jokes({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <>
      {data.map((joke) => (
        <div
          key={joke.id}
          style={{
            margin: "7px",
            background: "#333",
            color: "#fff",
            padding: "7px",
          }}
        >
          <p>Q: {joke.setup}</p>
          <p>_</p>
          <p>A: {joke.delivery}</p>
        </div>
      ))}
    </>
  );
}

export default App;
