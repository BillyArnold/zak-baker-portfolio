import Link from "next/link";

const FixedHeader = () => {
  return (
    <>
      <div className="fixed top-5 left-5 lg:top-10 xl:left-10 text-white z-50">
        <Link href="/">
          <h1 className="font-bold text-xl cursor-pointer">ZAK BAKER</h1>
        </Link>
        <div className="text-base">Producer/Mixer/Engineer</div>
      </div>
    </>
  );
};

export default FixedHeader;
