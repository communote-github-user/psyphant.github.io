echo 'Killing all Jekyll instances'
kill -9 $(ps aux | grep '[j]ekyll' | awk '{print $2}')
clear

echo "Building PDF-friendly HTML site for the PDF generation ..."
jekyll serve --detach --config configs/config_all.yml,configs/config_all_pdf.yml
echo "Done!"

echo "Building the PDF for the Documentation ..."
prince --javascript --input-list=pdf/prince-file-list.txt -o doc/files/Communote-Documentation.pdf;
echo "Done!"

echo "Building done. You can find the PDF file at /doc/files/Communote-Documentation.pdf"
