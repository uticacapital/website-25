import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Homepage = React.lazy(() => import("./pages/Homepage"));

const App: React.FC = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fixed-deposit" element={<FixedDeposit />} />
        <Route path="/mutual-fund" element={<MutualFund />} />
        <Route path="/impact-investment" element={<ImpactInvestment />} />
        <Route path="/portfolio-advisory" element={<PortfolioAdvisory />} />
        <Route path="/asset-management" element={<AssetManagement />} />
        <Route path="/wealth-management" element={<WealthManagement />} />
        <Route path="/fund-management" element={<FundManagement />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} /> */}
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
