
import CategorySwiper from "./CategorySwiper";

const BrowseCategory = () => {
  return (
    <div className="py-10 px-6 flex flex-col gap-6">
      <div className="container  max-w-screen-2xl mx-auto flex justify-center items-center">
        <h1 className="text-[32px] font-semibold">Shop with Categories</h1>
      </div>

      <div className="container max-w-screen-2xl mx-auto min-h-[300px]">
        <CategorySwiper />
      </div>
    </div>
  );
};

export default BrowseCategory;
