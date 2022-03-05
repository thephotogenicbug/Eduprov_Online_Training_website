import React from 'react'

const Footer = () => {
  return (
    <>
      <footer
        class="text-center text-white"
        style={{ backgroundColor: "#183B5A" }}
      >
        <div class="container p-4 pb-0">
          <section class="mb-4">
            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-facebook-f"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-twitter"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-google"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-instagram"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-github"></i>
            </a>
          </section>
        </div>
        {/* style="background-color: rgba(0, 0, 0, 0.2); */}
        <div class="text-center p-3" style={{ backgroundColor: "#183B5A" }}>
          © 2022 Copyright :
          <a class="text-white" href="https://mdbootstrap.com/">
            {""} Eduprov.com
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer