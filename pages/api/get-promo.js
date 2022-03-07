import  { GoogleSpreadsheet } from 'google-spreadsheet'
import { fromBase64 } from '../../utils/base64'


// here to connect spreadsheet!!!

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

// remember here i get Api coupon
//create message coupon
export default async(req, res) =>{
    //get some dates of connection spreadsheet
    try{
       
        await doc.useServiceAccountAuth({
            client_email:process.env.SHEET_CLIENT_EMAIL,
            private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
        })
        await doc.loadInfo()

       const sheet = doc.sheetsByIndex[2]
       await sheet.loadCells('A2:B2')
      
       const SeePrice = sheet.getCell(1,0)
       const Textaffordable = sheet.getCell(1,1)
       
       
       res.end(JSON.stringify({
        showCoupon: SeePrice.value === 'VERDADEIRO',
        mensagem:Textaffordable.value
    }))

       } catch(err) {
           //if gave error i dont show anymore mensage
        res.end(JSON.stringify({
            showCoupon:false,
            mensagem:''
        }))
       }
   
}