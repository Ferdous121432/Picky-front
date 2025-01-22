import { Spinner } from "@material-tailwind/react";

function SpinnerFullPage() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-5rem)] m-10 bg-dark-1">
      <div className="flex items-end gap-4">
        <Spinner size="xxl" />
      </div>
    </div>
  );
}

export default SpinnerFullPage;
