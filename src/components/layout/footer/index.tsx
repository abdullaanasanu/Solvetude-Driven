// Imports
import React from "react";
import Link from "next/link";

// UI Imports
import { Wrapper } from "@/components/common/wrapper";
import style from "./style.module.scss";
import { Button } from "@/components/common/button";
import { Select } from "@/components/common/select";

// Component
export const Footer = () => {
  return (
    <footer className={style.footer}>
      <Wrapper className={style.content}>
        <div className={style.inquiry}>
          <div className={style.info}>
            <h2 className={style.title}>Speak to an agent today</h2>
            <p className={style.text}>
              Sign up for our weekly newsletter for market updates!
            </p>
          </div>
          <form className={style.form}>
            <div className={style.row}>
              <input
                type="text"
                placeholder="Enter your Name"
                className={style.input}
              />
              <input
                type="email"
                placeholder="Enter your Email"
                className={style.input}
              />
            </div>
            <div className={style.row}>
              <input
                type="tel"
                placeholder="Enter your Phone Number"
                className={style.input}
              />
              <Select
                placeholder="Reason for reaching out to us"
                options={["Buying", "Selling", "Renting", "Investing"]}
              />
            </div>
            <textarea
              placeholder="How did you hear about us?"
              className={style.textarea}
              rows={5}
            />
            <Button title="Submit" />
          </form>
        </div>
        <div className={style.main}>
          <div className={style.links}>
            <div className={style.column}>
              <h3 className={style.title}>Our Properties</h3>
              <Link href="/">Buy</Link>
              <Link href="/">Rent</Link>
              <Link href="/">Sell</Link>
            </div>
            <div className={style.column}>
              <h3 className={style.title}>For Developers</h3>
              <Link href="/">Why Driven properties</Link>
              <Link href="/">Case studies</Link>
            </div>
            <div className={style.column}>
              <h3 className={style.title}>Services</h3>
              <Link href="/">Luxury</Link>
              <Link href="/">Relocation Services</Link>
              <Link href="/">Property management</Link>
              <Link href="/">Property Valuation</Link>
              <Link href="/">Property Brokerage</Link>
              <Link href="/">Commercial & Industrial</Link>
              <Link href="/">Interior Design & Fit Out</Link>
              <Link href="/">Real Estate Development</Link>
            </div>
            <div className={style.column}>
              <h3 className={style.title}>Blog, Podcast & Data</h3>
              <Link href="/">Blog</Link>
              <Link href="/">Podcast</Link>
              <Link href="/">Data & Market Trends</Link>
            </div>
            <div className={style.column}>
              <h3 className={style.title}>About</h3>
              <Link href="/">Who we are</Link>
              <Link href="/">Our team</Link>
              <Link href="/">Sister companies</Link>
              <Link href="/">Careers</Link>
            </div>
          </div>
          <div className={style.address}>
            <div className={style.column}>
              <h6>Head Office</h6>
              <p className={style.title}>Business Bay Office</p>
              <p>
                2nd Floor <br />
                Bay Square <br />
                Building 13 <br />
                Business Bay, Dubai <br />
                Tel: +971 (0) 4 429 7040 <br />
                Fax: +971 (0) 4 429 6024
              </p>
            </div>
            <div className={style.column}>
              <h6>Branch Office</h6>
              <p className={style.title}>Jumeirah Village Circle</p>
              <p>
                Office No 4 <br />
                Chaimaa Premiere <br />
                District 15, JVC <br />
                Dubai, UAE <br />
                Tel: +971 (0) 4 578 6295 <br />
                Fax: +971 (0) 4 429 6024
              </p>
            </div>

            <div className={style.column}>
              <h6></h6>
              <p className={style.title}>Dubai Creek Harbour</p>
              <p>
                Office No GFR-08 <br />
                The Creek Residences <br />
                South Podium <br />
                Dubai Creek Harbour, UAE <br />
                Tel: +971 (0) 4 257 2772 <br />
                Fax: +971 (0) 4 429 602
              </p>
            </div>

            <div className={style.column}>
              <h6></h6>
              <p className={style.title}>Dubai Hills Estate</p>
              <p>
                Unit R9C Ground Floor <br />
                Acacia 1 Tower C <br />
                Dubai Hills Estate, UAE <br />
                Tel: +971 (0) 4 388 2201 <br />
                Fax: +971 (0) 4 429 6024
              </p>
            </div>

            <div className={style.column}>
              <h6>International Offices</h6>
              <p className={style.title}>China</p>
              <p>
                Office No 2005B <br />
                Shenzhen ICC Tower <br />
                168 Fuhua 3rd Road <br />
                Futian CBD, Shenzhen City <br />
                Guangdong Province, China
              </p>
            </div>

            <div className={style.column}>
              <h6></h6>
              <p className={style.title}>Saudi Arabia</p>
              <p>
                Office No 14 <br />
                Home Offices Complex <br />
                Al Urubah Street <br />
                Riyadh, KSA
              </p>
            </div>
          </div>
        </div>
        <div className={style.bottom}>
          <div className={style.social}>
            <p className={style.small}>Follow Us :</p>
            <img src="/social/facebook.svg" alt="Facebook" />
            <img src="/social/x.svg" alt="X" />
            <img src="/social/instagram.svg" alt="Instagram" />
            <img src="/social/linkedin.svg" alt="LinkedIn" />
            <img src="/social/youtube.svg" alt="YouTube" />
            <p className={style.small}>
              Call us on: <span className={style.phone}>800 374836</span>
            </p>
          </div>
          <div className={style.copy}>
            <p>
              <Link href={"/"}>Privacy Policy</Link> |{" "}
              <Link href={"/"}>Terms & Conditions</Link>
            </p>
          </div>
          <div className={style.terms}>
            <p>© 2023 Driven Properties LLC. All Rights Reserved.</p>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};
