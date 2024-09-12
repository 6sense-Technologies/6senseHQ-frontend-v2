export const handleDownload = (resourceUrl: string):void => {
    const link = document.createElement('a');
    link.href = resourceUrl;
    link.setAttribute('download', ""); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}