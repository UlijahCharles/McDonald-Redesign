import FooterBottom from "./FooterBottom";
import FooterList from "./FooterList";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <FooterList
          title="About Us"
          items={[
            "Our History",
            "Leadership Team",
            "Values in Action",
            "Investors Relations",
            "New & Notifications",
            "Franchise Info",
          ]}
        />
        <FooterList
          title="Careers"
          items={[
            "Education Opportunities",
            "Employment Perks",
            "Staff & Management",
            "Working With Us",
            "Apply Now",
          ]}
        />
        <FooterList
          title="Services"
          items={[
            "Wi-Fi",
            "Arch Card",
            "PlayPlaces & Parties",
            "McDelivery",
            "Mobile Order & Pay",
            "McDonald's Merchandise",
          ]}
        />
        <FooterList
          title="Community"
          items={[
            "HACER Scholarships For Hispanic Students",
            "Ronald McDonald House Charities",
            "McDonald's APA",
            "McDonald's International",
            "Black & Positively Golden",
          ]}
        />
        <FooterList
          title="Contact Us"
          items={[
            "Arch Card",
            "Donations",
            "Employment",
            "Mobile App Feedback",
            "Restarurant Feedback",
          ]}
        />
      </div>
      <FooterBottom />
    </footer>
  );
}

export default Footer;
