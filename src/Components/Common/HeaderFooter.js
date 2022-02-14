import Footer from "./Footer";
import Header from "./Header";

export default function HeaderFooter(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
