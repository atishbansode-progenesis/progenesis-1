export default function Page() {
  return (
    <div className="bg-white w-full">
      <table
        width="100%"
        className="w-full"
        role="presentation"
        cellPadding="0"
        cellSpacing="0"
      >
        <tbody>
          <tr>
            <td>
              {/* Row 1 - Contact Info and Banner */}
              <table
                className="mx-auto w-full"
                role="presentation"
                cellPadding="0"
                cellSpacing="0"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        className="mx-auto w-full max-w-[500px]"
                        role="presentation"
                      >
                        <tbody>
                          <tr>
                            <td className="py-1.5">
                              {/* Contact paragraph */}
                              <table width="100%" role="presentation">
                                <tbody>
                                  <tr>
                                    <td className="py-2.5">
                                      <div className="text-base text-[#0068a5] font-sans">
                                        <p className="m-0 mb-1 text-sm text-[#555]">
                                          Regards,
                                        </p>
                                        <p className="m-0 mb-1">
                                          <strong>Your Name</strong>
                                        </p>
                                        <p className="m-0 mb-1">Your Designation</p>
                                        <p className="m-0">Mobile No.- Your Contact</p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>

                              {/* Banner Image */}
                              <table width="100%" role="presentation">
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="text-center">
                                        <img
                                          src="https://progenesisivf.com/email/sign-new.png"
                                          width="500"
                                          className="w-full h-auto block"
                                          alt="Progenesis IVF Banner"
                                        />
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Row 2 - Company Name and Social Icons */}
              <table className="mx-auto w-full" role="presentation">
                <tbody>
                  <tr>
                    <td>
                      <table
                        className="mx-auto w-full max-w-[500px]"
                        role="presentation"
                      >
                        <tbody>
                          <tr>
                            <td className="w-2/3 p-4">
                              <table width="100%" role="presentation">
                                <tbody>
                                  <tr>
                                    <td className="py-4 px-2.5">
                                      <div className="text-sm font-sans">
                                        <p className="m-0">
                                          Progenesis IVF PVT LTD |{" "}
                                          <a
                                            href="https://progenesisivf.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline text-black hover:text-[#0068a5]"
                                          >
                                            progenesisivf.com
                                          </a>
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>

                            {/* Social icons */}
                            <td className="w-1/3 align-middle">
                              <table width="100%" role="presentation">
                                <tbody>
                                  <tr>
                                    <td className="text-center py-1.5">
                                      <table
                                        className="inline-block"
                                        role="presentation"
                                      >
                                        <tbody>
                                          <tr>
                                            <td className="px-1">
                                              <a 
                                                href="https://www.linkedin.com/company/progenesis-ivf/" 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block hover:opacity-80"
                                              >
                                                <img
                                                  src="https://progenesisivf.com/email/linkedin2x.png"
                                                  width="32"
                                                  alt="LinkedIn"
                                                  className="w-8 h-8"
                                                />
                                              </a>
                                            </td>
                                            <td className="px-1">
                                              <a 
                                                href="https://www.youtube.com/c/ProgenesisFertilityCenter" 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block hover:opacity-80"
                                              >
                                                <img
                                                  src="https://progenesisivf.com/email/youtube2x.png"
                                                  width="32"
                                                  alt="YouTube"
                                                  className="w-8 h-8"
                                                />
                                              </a>
                                            </td>
                                            <td className="px-1">
                                              <a 
                                                href="https://www.facebook.com/progenesisivf/" 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block hover:opacity-80"
                                              >
                                                <img
                                                  src="https://progenesisivf.com/email/facebook2x.png"
                                                  width="32"
                                                  alt="Facebook"
                                                  className="w-8 h-8"
                                                />
                                              </a>
                                            </td>
                                            <td className="px-1">
                                              <a 
                                                href="https://www.instagram.com/progenesis_ivf_center" 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block hover:opacity-80"
                                              >
                                                <img
                                                  src="https://progenesisivf.com/email/instagram2x.png"
                                                  width="32"
                                                  alt="Instagram"
                                                  className="w-8 h-8"
                                                />
                                              </a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Row 3 - Disclaimer */}
              <table className="mx-auto w-full" role="presentation">
                <tbody>
                  <tr>
                    <td>
                      <table className="mx-auto w-full max-w-[500px]" role="presentation">
                        <tbody>
                          <tr>
                            <td className="p-2.5">
                              <div className="text-[#b1b1b1] text-xs font-sans">
                                <p className="m-0">
                                  The content of this email (including any attachments) is confidential
                                  and intended for the recipient specified in the message only. It is
                                  strictly forbidden to share any part of this message with any third
                                  party…
                                </p>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}