import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

// Core
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

// Our Work
import OurWorkIndex from "../pages/ourwork/Index";
import Scholarships from "../pages/ourwork/Scholarships";
import Internships from "../pages/ourwork/Internships";
import SkillPrograms from "../pages/ourwork/SkillPrograms";
import CommunityProjects from "../pages/ourwork/CommunityProjects.jsx";
import EconomicDevelopment from "../pages/ourwork/EconomicDevelopment";

// Media
import MediaIndex from "../pages/media/Index";
import News from "../pages/media/News";
import Articles from "../pages/media/Articles";
import PressReleases from "../pages/media/PressReleases";
import MediaGallery from "../pages/media/MediaGallery";

// Get Involved
import GetInvolvedIndex from "../pages/getinvolved/Index";
import Volunteer from "../pages/getinvolved/Volunteer";
import Partner from "../pages/getinvolved/Partner";
import Donate from "../pages/getinvolved/Donate";
import Careers from "../pages/getinvolved/Careers";

export function AppRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        {/* Our Work */}
        <Route path="/our-work" element={<OurWorkIndex />} />
        <Route path="/our-work/scholarships" element={<Scholarships />} />
        <Route path="/our-work/internships" element={<Internships />} />
        <Route path="/our-work/skill-programs" element={<SkillPrograms />} />
        <Route path="/our-work/community-projects" element={<CommunityProjects />} />
        <Route path="/our-work/economic-development" element={<EconomicDevelopment />} />

        {/* Updates */}
        <Route path="/updates" element={<MediaIndex />} />
        <Route path="/media/news" element={<News />} />
        <Route path="/media/articles" element={<Articles />} />
        <Route path="/media/press-releases" element={<PressReleases />} />
        <Route path="/media/gallery" element={<MediaGallery />} />

        {/* Get Involved */}
        <Route path="/get-involved" element={<GetInvolvedIndex />} />
        <Route path="/get-involved/volunteer" element={<Volunteer />} />
        <Route path="/get-involved/partner" element={<Partner />} />
        <Route path="/get-involved/donate" element={<Donate />} />
        <Route path="/get-involved/careers" element={<Careers />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
}
