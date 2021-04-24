import React from "react"
import Layout from "../components/layout"
import resume from "../images/NigelPenilla_Resume2020.png"

export default function Resume() {
  console.log(resume)
  return (
    <Layout>
      <div class="flex justify-center mx-auto">
        <img src={resume} alt="Resume" class="w-7/12" />
      </div>
    </Layout>
  )
}
