import Footer from "./Footer";
import Header from "./Header";

export default function HeaderFooter(props) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
