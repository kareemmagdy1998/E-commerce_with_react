import React from "react";
import "../css/footer.css";
export function Footer() {
  return (
    <div >
      <footer className="bg-dark text-white pt-3 pb-3 bottom-0 "  id="main-footer">
        <div className="container text-center footer-content">
          <div className="row text-center first-item">
            <div className="mx-auto mt-3">
              <h6 className="text-secondary">
                &copy;2023 Plant Shop.Powered by Plant Shop.
              </h6>

              <i className="bi bi-facebook "></i>
              <i className="bi bi-instagram mx-2"></i>
              <i class="bi bi-twitter"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
