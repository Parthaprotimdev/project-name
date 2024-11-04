import PageDescription from "../components/PageDescription";
import PageHeading from "../components/PageHeading";

const Statistics = () => {
  return (
    <section className="py-8 bg-[#9538E2]">
      <div
        className="mx-auto max-w-[80rem] px-4 min80:px-0
flex flex-col items-center gap-4"
      >
        <PageHeading>Statistics</PageHeading>

        <PageDescription>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </PageDescription>
      </div>
    </section>
  );
};

export default Statistics;
