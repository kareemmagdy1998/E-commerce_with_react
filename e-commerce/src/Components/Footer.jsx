import React from "react";
import "../CSS/footer.css";
export function Footer() {
  return (
    <div>
      <footer className="bg-dark text-white pt-3 pb-3 customfooter">
        <div className="container text-center ">
          <div className="row text-center">
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
