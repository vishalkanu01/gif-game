import HomePage from "@/components/HomePage";
import Layout from "@/components/Layout";
import LeaderBoardPage from "@/components/LeaderBoardPage";
import { Route, Routes } from "react-router-dom";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/leaderboard" element={<LeaderBoardPage />} />
        <Route path="*" element={<div>NotFound</div>} /> {/* 404 fallback route */}
      </Route>
    </Routes>
  );
};

export default Navigation;
