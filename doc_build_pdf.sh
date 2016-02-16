echo 'Killing all Jekyll instances'
kill -9 $(ps aux | grep '[j]ekyll' | awk '{print $2}')
clear

echo "Building PDF-friendly HTML site for Mydoc Writers ..."
jekyll serve --detach --config configs/config_all.yml,configs/config_all_pdf.yml
echo "done"

echo "Building the doc PDF ..."
prince --javascript --input-list=pdf/prince-file-list.txt -o doc/files/Communote-Documentation.pdf;
echo "done"

echo "All done building the PDFs!"
echo "Now build the web outputs: . doc_3_multibuild_web.sh"
