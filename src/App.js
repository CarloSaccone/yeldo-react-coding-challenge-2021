/** @jsxImportSource theme-ui */
import { Container } from "react-bootstrap";
import { ThemeProvider } from "theme-ui";
import Item from "./components/Item";
import { websites } from "./data";
import { global } from "./theme/global";

function App() {
  return (
    <ThemeProvider theme={global}>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
        integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
        crossOrigin="anonymous"
      />
      <Container>
        <h1
          sx={{
            color: "primary",
            fontFamily: "heading",
          }}
        >
          Bookmarks organizer
        </h1>

        {websites.map((i) => (
          <Item data={i} />
        ))}
      </Container>
    </ThemeProvider>
  );
}

export default App;
