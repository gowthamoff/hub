import Feed from '@components/Feed';
const Home = () => {
  return (
    <section className="w-full flex-col">
      <h1 className="head_text text-center flex-">
        FarmAI
        <br />
        <span className="orange_gradient text-center">
          Farmers AI-Assistent
        </span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        dolor non quis inventore ex rerum quisquam dicta laboriosam asperiores
        est.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
