import Image from "next/image";

const HomePage = async () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-[20%] space-y-4">
        <Image
          src="/logo.png"
          alt="logo"
          width={200}
          height={200}
          className="h-10 w-10 rounded-full"
        />
        <p className="text-xl font-extrabold">How can I help you today?</p>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-2 gap-4 mt-32">
        <div className="border p-4 rounded-lg">
          <p>Recommend activities</p>
          <p>for a team-building day with remote employees</p>
        </div>

        <div className="border p-4 rounded-lg">
          <p>Plan a trip</p>
          <p>to explore the Madagascar wildlife on a budget</p>
        </div>

        <div className="border p-4 rounded-lg hidden md:block">
          <p>Explain this code:</p>
          <p>"cat config.yaml | awk NF"</p>
        </div>

        <div className="border p-4 rounded-lg hidden md:block">
          <p>Write a spreadsheet formula</p>
          <p>to convert a date to the weekday</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
