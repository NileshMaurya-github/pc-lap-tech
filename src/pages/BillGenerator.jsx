import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Plus, Trash2, Download, Printer } from 'lucide-react';

export default function BillGenerator() {
  const [invoiceNo, setInvoiceNo] = useState('PC/15.01.2026/004');
  const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString().split('T')[0]);
  const [dueDate, setDueDate] = useState(new Date().toISOString().split('T')[0]);

  const [billedTo, setBilledTo] = useState({
    name: 'InfoAxon Technologies India Pvt. Ltd',
    address: '08th Floor, Tradex Tower, Plot No 15 Sector 125,\\nNoida-201301 (U.P.)',
    gstin: '09AABC11798R1ZP'
  });

  const [items, setItems] = useState([
    { id: 1, desc: 'Dell Latitude 3400 hinge', serial: '', hsn: '8471', qty: 1, rate: 1200 },
    { id: 2, desc: 'Dell Latitude 3400 power button', serial: '', hsn: '', qty: 1, rate: 1500 },
    { id: 3, desc: 'Dell Latitude 3400 DC Jack', serial: '', hsn: '', qty: 1, rate: 900 }
  ]);

  const [gstRate, setGstRate] = useState(18);
  const [gstType, setGstType] = useState('IGST'); // IGST or CGST_SGST

  const handleAddItem = () => {
    setItems([...items, { id: Date.now(), desc: '', serial: '', hsn: '', qty: 1, rate: 0 }]);
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter(i => i.id !== id));
  };

  const handleItemChange = (id, field, value) => {
    setItems(items.map(i => i.id === id ? { ...i, [field]: value } : i));
  };

  const subtotal = items.reduce((acc, item) => acc + (item.qty * item.rate), 0);
  const gstAmount = Math.round(subtotal * (gstRate / 100));
  const totalAmount = subtotal + gstAmount;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      {/* NO-PRINT CONTROLS SECTION */}
      <div className="max-w-[210mm] mx-auto mb-8 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 print:hidden">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold font-display text-gray-800">Invoice Settings</h2>
          <button onClick={handlePrint} className="btn-blue flex items-center gap-2">
            <Printer size={16} /> Print / Save PDF
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-700">Invoice Details</h3>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-500 uppercase">Invoice No</label>
              <input type="text" value={invoiceNo} onChange={e => setInvoiceNo(e.target.value)} className="input-field py-2 px-3 border border-slate-300 rounded-lg" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-slate-500 uppercase">Invoice Date</label>
                <input type="date" value={invoiceDate} onChange={e => setInvoiceDate(e.target.value)} className="input-field py-2 px-3 border border-slate-300 rounded-lg" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-slate-500 uppercase">Due Date</label>
                <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} className="input-field py-2 px-3 border border-slate-300 rounded-lg" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-500 uppercase">GST Type & Rate</label>
              <div className="flex gap-2">
                <select value={gstType} onChange={e => setGstType(e.target.value)} className="w-1/2 py-2 px-3 border border-slate-300 rounded-lg bg-white">
                  <option value="IGST">IGST Only</option>
                  <option value="CGST_SGST">CGST + SGST</option>
                </select>
                <select value={gstRate} onChange={e => setGstRate(Number(e.target.value))} className="w-1/2 py-2 px-3 border border-slate-300 rounded-lg bg-white">
                  <option value={0}>0%</option>
                  <option value={5}>5%</option>
                  <option value={12}>12%</option>
                  <option value={18}>18%</option>
                  <option value={28}>28%</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-700">Billed To (Client Details)</h3>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-500 uppercase">Company / Name</label>
              <input type="text" value={billedTo.name} onChange={e => setBilledTo({...billedTo, name: e.target.value})} className="input-field py-2 px-3 border border-slate-300 rounded-lg" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-500 uppercase">Address</label>
              <textarea value={billedTo.address} onChange={e => setBilledTo({...billedTo, address: e.target.value})} rows="2" className="input-field py-2 px-3 border border-slate-300 rounded-lg resize-none"></textarea>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-500 uppercase">GST Reg No</label>
              <input type="text" value={billedTo.gstin} onChange={e => setBilledTo({...billedTo, gstin: e.target.value})} className="input-field py-2 px-3 border border-slate-300 rounded-lg uppercase" />
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-gray-700">Products / Services</h3>
            <button onClick={handleAddItem} className="text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-1.5 px-3 rounded-lg flex items-center gap-1 transition-colors">
              <Plus size={14} /> Add Row
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600">
                <tr>
                  <th className="py-2 px-3 text-left font-semibold">Description</th>
                  <th className="py-2 px-3 text-left font-semibold w-24">Serial/Batch</th>
                  <th className="py-2 px-3 text-left font-semibold w-20">HSN</th>
                  <th className="py-2 px-3 text-left font-semibold w-16">Qty</th>
                  <th className="py-2 px-3 text-left font-semibold w-24">Rate (₹)</th>
                  <th className="py-2 px-3 text-center font-semibold w-10"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {items.map((item, idx) => (
                  <tr key={item.id} className="bg-white">
                    <td className="p-1.5"><input type="text" value={item.desc} onChange={e => handleItemChange(item.id, 'desc', e.target.value)} className="w-full py-1.5 px-2 border border-slate-200 rounded focus:border-blue-500 outline-none" placeholder="Item description" /></td>
                    <td className="p-1.5"><input type="text" value={item.serial} onChange={e => handleItemChange(item.id, 'serial', e.target.value)} className="w-full py-1.5 px-2 border border-slate-200 rounded focus:border-blue-500 outline-none" /></td>
                    <td className="p-1.5"><input type="text" value={item.hsn} onChange={e => handleItemChange(item.id, 'hsn', e.target.value)} className="w-full py-1.5 px-2 border border-slate-200 rounded focus:border-blue-500 outline-none" /></td>
                    <td className="p-1.5"><input type="number" min="1" value={item.qty} onChange={e => handleItemChange(item.id, 'qty', Number(e.target.value))} className="w-full py-1.5 px-2 border border-slate-200 rounded focus:border-blue-500 outline-none" /></td>
                    <td className="p-1.5"><input type="number" min="0" value={item.rate} onChange={e => handleItemChange(item.id, 'rate', Number(e.target.value))} className="w-full py-1.5 px-2 border border-slate-200 rounded focus:border-blue-500 outline-none" /></td>
                    <td className="p-1.5 text-center">
                      <button onClick={() => handleRemoveItem(item.id)} className="text-red-400 hover:text-red-600 p-1"><Trash2 size={16}/></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* INVOICE PREVIEW SECTION - PRINTABLE */}
      <div className="print-container max-w-[210mm] mx-auto bg-white border border-slate-200 print:border-none print:m-0">
        <div className="invoice-box p-[6mm] text-black font-sans text-[12px] leading-snug tracking-tight">
          
          {/* Header */}
          <div className="flex justify-between items-start mb-2">
            <div>
              <h1 className="text-[38px] font-black tracking-tighter uppercase leading-none mt-2">PC LAP TECH</h1>
            </div>
            <div className="text-right pt-2 font-bold flex flex-col items-end gap-1">
              <div className="text-lg uppercase">TAX INVOICE</div>
              <div>Invoice No:- {invoiceNo}</div>
              <div>Invoice Date:- {new Date(invoiceDate).toLocaleDateString('en-GB')}</div>
              <div>Due Date:- {new Date(dueDate).toLocaleDateString('en-GB')}</div>
            </div>
          </div>

          <div className="border-[2px] border-black w-full flex flex-col">
            
            {/* Billed By & Billed To */}
            <div className="flex border-b-[2px] border-black pb-0 min-h-[140px]">
              <div className="w-[50%] border-r-[2px] border-black p-2 flex flex-col gap-0.5">
                <div className="font-bold">Billed By</div>
                <div className="font-bold text-[14px]">PC LAP TECH</div>
                <div className="font-bold mt-1">H 250,G no 6,B/Block Vinay Nagar Agwanpur</div>
                <div className="font-bold">Faridabad Hariyana 121003</div>
                <div className="font-bold mt-3">GSTIN:- 06EOHPM9256M1Z6</div>
                <div className="font-bold">Email:- pclaptech000@gmail.com</div>
                <div className="font-bold">Phone: 6306372863,</div>
              </div>
              <div className="w-[50%] p-2 flex flex-col gap-0.5 relative">
                <div className="font-bold">Billed To</div>
                <div className="font-bold text-[14px]">{billedTo.name}</div>
                <div className="font-bold whitespace-pre-line mt-1 leading-snug">
                  {billedTo.address}
                </div>
                {/* GST at bottom */}
                <div className="absolute bottom-6 left-2 font-bold border-t-[2px] border-black w-[calc(100%-16px)] pt-1">
                  GST Reg No: {billedTo.gstin}
                </div>
                <div className="absolute bottom-1 left-2 font-bold border-t-[2px] border-black w-[calc(100%-16px)] pt-1">
                  GST Reg No: {billedTo.gstin} {/* Replicated as in the image */}
                </div>
              </div>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-[30px_1fr_90px_60px_40px_80px_100px] border-b-[2px] border-black font-bold">
              <div className="p-1 border-r-[2px] border-black text-center">S.N</div>
              <div className="p-1 border-r-[2px] border-black text-center">Description of Goods</div>
              <div className="p-1 border-r-[2px] border-black text-center text-[12px]">serial numbe</div>
              <div className="p-1 border-r-[2px] border-black text-center">HSN Code</div>
              <div className="p-1 border-r-[2px] border-black text-center">Qty</div>
              <div className="p-1 border-r-[2px] border-black text-center">Rate</div>
              <div className="p-1 text-center">Amount</div>
            </div>

            {/* Table Body (min height to push footer down) */}
            <div className="flex flex-col min-h-[120px]">
              <div className="grid grid-cols-[30px_1fr_90px_60px_40px_80px_100px] flex-1">
                <div className="border-r-[2px] border-black flex flex-col items-center pt-2 gap-2">
                  {items.map((_, i) => <div key={i}>{i+1}</div>)}
                </div>
                <div className="border-r-[2px] border-black pt-2 pl-2 gap-2 flex flex-col">
                  {items.map((item, i) => <div key={i}>{item.desc}</div>)}
                </div>
                <div className="border-r-[2px] border-black pt-2 text-center gap-2 flex flex-col">
                  {items.map((item, i) => <div key={i}>{item.serial || '\u00A0'}</div>)}
                </div>
                <div className="border-r-[2px] border-black pt-2 text-right pr-2 gap-2 flex flex-col">
                  {items.map((item, i) => <div key={i}>{item.hsn || '\u00A0'}</div>)}
                </div>
                <div className="border-r-[2px] border-black pt-2 text-center gap-2 flex flex-col">
                  {items.map((item, i) => <div key={i}>{item.qty}</div>)}
                </div>
                <div className="border-r-[2px] border-black pt-2 text-right pr-2 gap-2 flex flex-col">
                  {items.map((item, i) => <div key={i}>{item.rate.toLocaleString('en-IN')}</div>)}
                </div>
                <div className="pt-2 text-right pr-2 gap-2 flex flex-col">
                  {items.map((item, i) => <div key={i}>{(item.qty * item.rate).toLocaleString('en-IN')}</div>)}
                </div>
              </div>
            </div>

            {/* Subtotal / Place of supply */}
            <div className="grid grid-cols-[1fr_80px_100px] border-t-[2px] border-black font-bold">
              <div className="border-r-[2px] border-black p-1 pl-2">
                Country of Supply: India Place of Supply: Delhi (07)
              </div>
              <div className="border-r-[2px] border-black p-1 pl-2">Total</div>
              <div className="p-1 text-right pr-2">{subtotal.toLocaleString('en-IN')}</div>
            </div>

            {/* Terms & Taxes */}
            <div className="grid grid-cols-[1fr_80px_100px] border-t-[2px] border-black min-h-[160px]">
              <div className="border-r-[2px] border-black p-2 pr-4 flex flex-col gap-1 text-[13px]">
                <div>Terms and Conditions</div>
                <div>1. Please quote invoice number when remitting funds.</div>
                <div>2. Please pay this bill through account payee cheque or transferred to bank account</div>
                <div>3. The cheque should be drawn in favour of PC LAP TECH</div>
                <div className="mt-2">For any enquiry, reach out via email at pclaptech000@gmail.com</div>
                <div>or call on 6306372863</div>
              </div>
              <div className="border-r-[2px] border-black flex flex-col">
                <div className="p-1 pl-2 border-b-[1px] border-transparent h-8 flex items-end">
                  {gstType === 'CGST_SGST' ? `CGST ${gstRate/2}%` : `CGST 0%`}
                </div>
                <div className="p-1 pl-2 border-b-[1px] border-transparent h-8 flex items-end">
                  {gstType === 'CGST_SGST' ? `SGST ${gstRate/2}%` : `SGST 0%`}
                </div>
                <div className="p-1 pl-2 h-8 flex items-end">
                  {gstType === 'IGST' ? `IGST ${gstRate}%` : `IGST 0%`}
                </div>
                <div className="mt-auto border-t-[2px] border-black p-1 pl-2 font-bold h-10 flex flex-col justify-end">
                  <div>Total</div>
                  <div>Amount</div>
                </div>
              </div>
              <div className="flex flex-col text-right pr-2">
                <div className="p-1 h-8 flex items-end justify-end">
                  {gstType === 'CGST_SGST' ? (gstAmount/2).toLocaleString('en-IN') : ''}
                </div>
                <div className="p-1 h-8 flex items-end justify-end">
                  {gstType === 'CGST_SGST' ? (gstAmount/2).toLocaleString('en-IN') : ''}
                </div>
                <div className="p-1 h-8 flex items-end justify-end">
                  {gstType === 'IGST' ? gstAmount.toLocaleString('en-IN') : ''}
                </div>
                <div className="mt-auto p-1 font-bold text-[22px] tracking-tight leading-none pb-2">
                  {totalAmount.toLocaleString('en-IN')}
                </div>
              </div>
            </div>

            {/* Bank Details Header */}
            <div className="border-t-[2px] border-black p-1 text-center font-bold">
              Bank Details
            </div>

            {/* Bank Details Body */}
            <div className="grid grid-cols-[1fr_300px] border-t-[2px] border-black min-h-[90px]">
              <div className="border-r-[2px] border-black p-2 grid grid-cols-[140px_1fr] gap-y-4 items-center">
                <div className="font-bold">Account Holder Name</div>
                <div>PC LAP TECH</div>
                
                <div className="font-bold">Account Number</div>
                <div>2258002100028628</div>
                
                <div className="font-bold">IFSC Code</div>
                <div>PUNB0225800</div>
                
                <div className="font-bold">Bank Name</div>
                <div>PUNJAB NATIONAL BANK</div>
              </div>
              <div className="p-2 relative flex flex-col justify-center items-center">
                {/* Stamp Mockup */}
                <div className="relative text-center mt-2">
                  <div className="text-blue-800 font-bold text-[18px] tracking-wide inline-block" style={{ transform: 'rotate(-5deg)' }}>
                    For PC LAP TECH
                  </div>
                  <div className="text-blue-900 absolute top-4 left-1/2 -translate-x-1/2 font-display text-[42px] opacity-60 pointer-events-none" style={{ fontFamily: '"Brush Script MT", cursive', transform: 'rotate(-10deg)' }}>
                    Vishal
                  </div>
                  <div className="text-blue-800 font-bold text-[16px] tracking-wide mt-4 ml-6" style={{ transform: 'rotate(-5deg)' }}>
                    Proprietor
                  </div>

                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="grid grid-cols-[50px_1fr] border-t-[2px] border-black">
              <div className="border-r-[2px] border-black p-1 text-center font-bold">
                Notes
              </div>
              <div className="p-1 pl-2 font-bold">
                THANK YOU FOR CHOOSING US Terms In case of external damage we will not count as in our<br/>
                warranty policy. In other case will replace the damage product
              </div>
            </div>

          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @page {
          size: A4;
          margin: 10mm;
        }
        @media print {
          /* Hide site chrome and animated backgrounds */
          header, footer, nav, .floating-buttons, .no-print,
          .bg-premium-container, .bg-aurora-orbs, .bg-tech-grid,
          iframe, .print\\:hidden {
            display: none !important;
            visibility: hidden !important;
          }
          /* Full white page background - removes the aurora orb ball */
          html, body {
            background: white !important;
            background-image: none !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          /* Remove the outer page padding so invoice starts at top */
          main, main > div {
            padding: 0 !important;
            margin: 0 !important;
            background: white !important;
          }
          /* Only render the invoice */
          .print-container {
            box-shadow: none !important;
            border: none !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            page-break-after: avoid;
            page-break-inside: avoid;
          }
          /* Crisp text rendering */
          * {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}} />
    </div>
  );
}
