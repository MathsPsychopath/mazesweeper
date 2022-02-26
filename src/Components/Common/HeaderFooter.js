import Footer from "./Footer";
import Header from "./Header";

export default function HeaderFooter(props) {
  return (
    <div className="grid gap-y-[6em]">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
