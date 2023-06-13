'use client'
import { useState } from "react";
import { Document, Page } from "react-pdf";


const PdfAsImage = ({pdf}) =>{
    return(
            <Document  file={pdf}>
                <Page pageNumber='1'></Page>
            </Document>
    )
}

export default PdfAsImage;