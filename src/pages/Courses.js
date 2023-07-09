import React from 'react'
import "./courses.css"
import background from '../img/about_us.jpg'
function Courses() {
  return (
    <div>
      <figure class="relative w-full transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 bg-gray-500  ">

        <img class="rounded-lg   mx-auto bg-blend-darken mix-blend-multiply bg-black w-[100vw] h-[76vh] lg:h-[90vh] " src={background} alt="image description" />

        <figcaption class="absolute left-16 px-4 text-white bottom-[20%] lg:bottom-[33%] ">
          <h1 className='text-center text-3xl lg:text-4xl my-10 font-bold'>
            /Courses
          </h1>

        </figcaption>
      </figure>
      <div class="containers m-auto">

        {/* <div id="toolbar">
          <select class="form-control">
            <option value="">Export Basic</option>
            <option value="all">Export All</option>
            <option value="selected">Export Selected</option>
          </select>
        </div> */}

        <table id="table"
          data-toggle="table"
          data-search="true"
          data-filter-control="true"
          data-show-export="true"
          data-click-to-select="true"
          data-toolbar="#toolbar">
          <thead>
            <tr>
              <th data-field="prenom" data-filter-control="input" data-sortable="true">Course Code	</th>
              <th data-field="name" data-filter-control="select" data-sortable="true">Course Name	</th>
              <th data-field="fee" data-filter-control="select" data-sortable="true">Fee</th>
              <th data-field="scheme" data-sortable="true">Scheme</th>
              <th data-field="description" data-filter-control="select" data-sortable="true">Course Description</th>
              <th data-field="duration" data-filter-control="select" data-sortable="true">Course Duration
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MSP010</td>
              <td>ADCA</td>
              <td>-</td>
              <td>-</td>
              <td>FUNDAMENTAL OPERATING SYSTEM, M S WORD, MS EXCEL, M S POWER POINT, ACCOUNTING, TALLY (ERP), INTERNET (e-MAIL), PHOTOSHOP, CORALDRAW, TYPING</td>
              <td>1 Year
              </td>
            </tr>
            <tr>
              <td>MSP011</td>
              <td>DCA</td>
              <td>-</td>
              <td>-</td>
              <td>FUNDAMENTAL MS WORD MS EXCEL MS POWER POINT ACCOUNTING TALLY (ERP) INTERNET(e-MALL)</td>
              <td>6 Months</td>
            </tr>
            <tr>
              <td>MCP012</td>
              <td>CFA</td>
              <td>-</td>
              <td>-</td>
              <td>TALLY ERP EXCEL ITERNET (e-MALL)</td>
              <td>4 Months
              </td>
            </tr>
            <tr>
              <td>MCP013</td>
              <td>DTP</td>
              <td>-</td>
              <td>-</td>
              <td>PHOTOSHOP PAGENAKER CORALDRAW TYPING INTERNET (e- MALL)</td>
              <td>6 Months
              </td>
            </tr>
            <tr>
              <td>MCP014</td>
              <td>CCC</td>
              <td>-</td>
              <td>-</td>
              <td>FUNDAMENTAL M S WORD MS EXCEL M S POWER POINT ONLINE MOKE TEST</td>
              <td>3 Month
              </td>
            </tr>
            <tr>
              <td>MCP015</td>
              <td>CTT</td>
              <td>-</td>
              <td>-</td>
              <td>COMPUTER TEACHER'S TRAINING

              </td>
              <td>1 Year
              </td>
            </tr>
            <tr>
              <td>MCP016</td>
              <td>PTT</td>
              <td>-</td>
              <td>-</td>
              <td>PRIMERY TEACHERS TRAINING

              </td>
              <td>2 Year
              </td>
            </tr>
            <tr>
              <td>MCP017</td>
              <td>NTT</td>
              <td>-</td>
              <td>-</td>
              <td>NURSERY TEACHERS TRAINING
              </td>
              <td>2 Year
              </td>
            </tr>
            <tr>
              <td>MCP018</td>
              <td>YTT</td>
              <td>-</td>
              <td>-</td>
              <td>YOGA TEACHERS TRAINING

              </td>
              <td>4 Months
              </td>
            </tr>
            <tr>

              <td>MCP019</td>
              <td>CCA</td>
              <td>-</td>
              <td>-</td>
              <td>ACCOUNTING FUNDAMENTAL EXCEL INTERNET(e-MAIL) TALLY ERP9

              </td>
              <td>4 Months
              </td>
            </tr>
            <tr>


              <td>MCP020</td>
              <td>CCC</td>
              <td>-</td>
              <td>-</td>
              <td>FUNDAMENTAL M S WORD MS EXCEL M S POWER POINT ONLINE MOKE TEST</td>
              <td>3 Month
              </td>
            </tr>
            <tr>

              <td>MCP021</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>ACCOUNTING TALLY ERP 9 WITH TAX

              </td>
              <td>3 Month
              </td>
            </tr>
            <tr>

              <td>MCP022</td>
              <td>PGDCA</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>1 Year
              </td>
            </tr>
            <tr>

              <td>MCP023</td>
              <td>BCC</td>
              <td>-</td>
              <td>-</td>
              <td>FUNDAMENTAL, OPERATING SYSTEM, M S WORD,MS EXCEL, M S POWER POINT, ACCOUNTING, TALLY (ERP9), INTERNET(e-MAIL)

              </td>
              <td>6 Months
              </td>
            </tr>
            <tr>

              <td>MCP024</td>
              <td>IGD</td>
              <td>-</td>
              <td>-</td>
              <td>BOMBAY ART

              </td>
              <td>1 Year
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Courses