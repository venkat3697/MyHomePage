import React from "react";
import { Notification } from "./Notification";
export const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="https://d3hquexcimrmu6.cloudfront.net/assets/sprites/logos/makerble-mini-logo-transparent-2e543d506b626dfda97d5ae54c54d174d345de3cfc9ec3105c6124e90c018667.png"
            alt="Bootstrap"
            width="30"
            height="30"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                My Apps
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Explore
              </a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <div class="position-relative w-100">
              <input
                class="form-control custom-search me-2"
                type="search"
                placeholder="Search contacts"
                aria-label="Search"
              />
              <span class="position-absolute top-50 end-0 translate-middle-y me-2">
                <i class="bi bi-search"></i>
              </span>
            </div>
          </form>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Notification />
            </li>
            <li class="nav-item me-3">

            </li>
            <li class="nav-item ">
              <div class="d-flex align-items-center">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5635AQEOecAT-4eGFw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1728003389764?e=1730181600&v=beta&t=18jh0ufELPApg0EcXMq5aXlN_yP5rrmFoZi_Xke1nZs"
                  alt="Profile"
                  class="rounded-circle me-2"
                  width={24}
                />
                <span class="profile-name">Venkata Naveen <i class="bi bi-caret-down-fill"></i></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
