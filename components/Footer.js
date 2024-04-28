import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        Created by{" "}
        <Link
          className="footer-link"
          href="https://github.com/saalim24/NextRead"
          target="_blank"
          rel="noopener noreferrer"
        >
          Saalim, Shoaib and Sabiya
        </Link>
      </div>
      <style jsx>{`
        .footer-container {
          background-color: #f8f9fa;
          padding: 20px;
          text-align: center;
          border-top: 1px solid #dee2e6;
        }
        .footer-content {
          font-size: 16px;
          color: #6c757d;
        }
        .footer-link {
          color: #007bff;
          text-decoration: none;
        }
        .footer-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}

