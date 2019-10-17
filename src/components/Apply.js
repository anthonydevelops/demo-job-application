import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "reactstrap";

export default function Apply() {
  let { jid, jt } = useParams();

  // On initial load, call embedded script
  useEffect(() => {
    console.log(jid);

    const script = document.createElement("script");

    script.type = "text/javascript";
    script.src =
      "https://c0dco635.caspio.com/dp/e750800019fb15629a0047759b9a/emb";
    script.async = true;

    // Load script
    const div = document.body.querySelector("#apply_content");
    div.appendChild(script);

    // Assign Job ID
    // document.getElementById("InsertRecordJob_ID").nodeValue = jid;
    const jobID = document.querySelector("#cbUniqueFormId_43babb961e49a0");
    console.log(jobID);
    // jobID.setAttribute("value", jid);
  });

  console.log(jid, jt);

  return (
    <div className="content">
      <div style={{ textAlign: "left" }}>
        <Button
          style={{ backgroundColor: "#6D91A0" }}
          onClick={() => window.history.back()}
        >
          Back
        </Button>
        <h4 style={{ padding: "2vh 0" }}>Applying for {jt.slice(3)}</h4>
      </div>
      <div id="apply_content"></div>
    </div>
  );
}
