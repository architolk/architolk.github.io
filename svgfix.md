The include %svgfix% Works only in combination with pdf2svg! => brew install pdf2svg

Steps:
1. Set layout to landscape in page setup of LTSpice
2. Print to PDF in LTSpice. Save PDF in the correct assets/images folder
3. Convert PDF to SVG using ./pdf2svg in the root of this repository (this will delete the PDF and replace it with the SVG)
4. Use the svgfix include in your md (for circuits)
