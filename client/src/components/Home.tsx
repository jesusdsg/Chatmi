import Layout from "@layouts/Layout";
import Logo from "@assets/logo.svg";
import ChatImage from "@assets/chat.svg";
function Home({ socket }: any) {
  return (
    <Layout>
      <div className="inline md:flex lg:flex gap-5 px-10 md:px-60 lg:px-60 py-20">
        <div className="m-auto mb-20 w-1/2 mt-20">
          <img src={Logo} alt="Logo" className="motion-safe:animate-bounce" />
          <div className="bg-dark-1 m-auto mt-4 h-2 m-auto w-10 lg:w-52 mx-6 rounded-circle"></div>
        </div>
        <div className="m-auto w-1/2 mt-19 text-center lg:text-left">
          <img src={ChatImage} alt="Logo" className="mb-6 lg:h-3/5" />
          <span className="text-2xl font-semibold text-light-3">
            Chat anonymously and meet new friends!
          </span>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
