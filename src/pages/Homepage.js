import { FooterCard } from "../components/Footer";
import { Layout } from "../components/Layout";
import { NavBar } from "../components/NavBar";

export const HomePage = () => {
  return (
    <div>
      <NavBar/> 
      <Layout/>
      <FooterCard/>
    </div>
  );
};
