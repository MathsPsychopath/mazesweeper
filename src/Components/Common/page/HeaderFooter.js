import Footer from "./Footer";
import Header from "./Header";

/**
 *
 * @param {JSX.Element} props.children
 * @returns {JSX.Element} content between header & footer
 */
export default function HeaderFooter(props) {
  return (
    <div className="flex flex-col justify-between pt-4 2xl:px-8 bg-slate-100">
      <Header />
      <div className="bg-white 2xl:mx-16 my-8 rounded-lg lg:px-8">
        {props.children}
      </div>
      <Footer />
    </div>
  );
}
