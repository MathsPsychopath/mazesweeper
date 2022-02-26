import Footer from "./Footer";
import Header from "./Header";

export default function HeaderFooter(props) {
  return (
    <div className="flex flex-col gap-y-10">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
