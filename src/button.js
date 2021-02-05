import React from 'react'
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import Formulario from './formularioCMI_pdf'

const button = () => {
    return (
        <PDFDownloadLink document={<Formulario />} fileName="somename.pdf">
            pdf
            {/* {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')} */}
        </PDFDownloadLink>

    )

}

export default button