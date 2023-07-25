import { Suspense } from "react";

// ==> Components
import Loading from "@components/Loading";
import Logger from "@common/layout/Logger";

// ==> Pages
import Home from "@pages/Home";

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Logger>
        <Home />
      </Logger>
    </Suspense>
  );
};

export default App;
