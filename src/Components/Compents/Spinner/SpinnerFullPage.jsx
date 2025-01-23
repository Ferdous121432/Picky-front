import { Spinner } from "@material-tailwind/react";
import Layout from "../../Utils/Layout";

function SpinnerFullPage() {
  return (
    <Layout>
      <div className="bg-dark-1 m-10 flex h-[calc(100vh-5rem)] items-center justify-center">
        <div className="flex items-end gap-4">
          <Spinner size="10rem" />
        </div>
      </div>
    </Layout>
  );
}

export default SpinnerFullPage;
