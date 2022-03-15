import Footer from "./Footer";
import Header from "./Header";

/**
 *
 * @param {JSX.Element} props.children
 * @returns {JSX.Element} content between header & footer
 */
export default function HeaderFooter(props) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
