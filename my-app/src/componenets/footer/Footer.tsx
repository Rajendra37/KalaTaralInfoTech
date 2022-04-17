import React from 'react'
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
export default function Footer() {
  return (
    <>

      <div className="my-0">

        <footer className="bg-dark text-center text-white">

          <div className="container p-4 pb-0">

            <section className="mb-4">

              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><FaFacebook />
              </a>


              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              >
                <FaTwitter />
              </a>


              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><FaGoogle /></a>


              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><FaInstagram /></a>


              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><FaLinkedin /></a>

            </section>

          </div>
          <div className="text-center p-3">
            © 2022 Copyright:
            <a className="text-white" href="#"> kalaTaral.com</a>
          </div>
        </footer>


      </div >
    </>

  )
}
