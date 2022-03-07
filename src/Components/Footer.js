import React from 'react'
import './Home.css'
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
              href="https://www.facebook.com/eduprovinstitute/"
              role="button"
            >
              <i class="fab fa-facebook-f"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="https://twitter.com/eduprov"
              role="button"
            >
              <i class="fab fa-twitter"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="https://www.instagram.com/accounts/login/?next=/eduprov_education/"
              role="button"
            >
              <i class="fab fa-instagram"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="https://www.linkedin.com/authwall?trk=ripf&trkInfo=AQFTxFsp3h5f-gAAAX9i9rYQSvek8ACelE8LRSga1igYI0zi4XHT4zKIY8RBBbhdWsvfy8QmvmKTt8ZpkbLp-5VuaTywOFdAPXFhfVlv613zduTAPXiX4an6LuNQVfUyJhj9bHA=&originalReferer=https://eduprov.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Feduprov-educational-institute-ab2b24115%2F"
              role="button"
            >
              <i class="fab fa-linkedin-in"></i>
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