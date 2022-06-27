import Footer from "./Footer";
import Header from "./Header";

/**
 *
 * @param {JSX.Element} props.children
 * @returns {JSX.Element} content between header & footer
 */
export default function HeaderFooter(props) {
  return (
    <div className="flex flex-col justify-between min-h-screen pt-4 2xl:px-8 bg-slate-100">
      <Header />
      <div className="bg-white my-8 rounded-lg lg:px-8 max-w-5xl [contain:content] mx-auto ">
        {props.children}
      </div>
      <Footer />
    </div>
  );
}
