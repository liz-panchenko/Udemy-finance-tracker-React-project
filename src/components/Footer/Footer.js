import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        This project was coded by
        <a
          href="https://elated-snyder-278566.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Liz Panchenko{" "}
        </a>
        and is open-sourced on{" "}
        <a
          href="https://github.com/liz-panchenko/Udemy-finance-tracker-React-project"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}
