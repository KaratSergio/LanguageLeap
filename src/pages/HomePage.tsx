import HomeContent from '@components/Home/HomeContent';
import InfoPanel from '@components/InfoPanel/InfoPanel';

const Home: React.FC = () => {
  return (
    <section className="mx-auto flex flex-col px-4 pb-8">
      <h2 className="invisible text-sm">Home Page</h2>
      <HomeContent />
      <InfoPanel />
    </section>
  );
};

export default Home;
