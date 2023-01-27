import './App.css';

import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import bootstrap_icons from '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import Popper from '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { useEffect, useState } from 'react';

function App() {

  const [currency, setCurrency] = useState('$ Dollar');
  const [budgetAmount, setBudgetAmount] = useState(0);
  const [remainingTotal, setRemainingTotal] = useState(0);
  const [spentTotal, setSpentTotal] = useState(0);
  const [updateStatus, setUpdateStatus] = useState('');
  const [marketingTotal, setMarketingTotal] = useState(0);
  const [financeTotal, setFinanceTotal] = useState(0);
  const [salesTotal, setSalesTotal] = useState(0);
  const [humanResourcesTotal, setHumanResourcesTotal] = useState(0);
  const [itTotal, setItTotal] = useState(0);

  useEffect(() => {
    updateBudgetVariables();
  })

  function updateBudgetAmount(){
    if(document.getElementById("inputBudgetAmount").value > 20000) {
      document.getElementById("inputBudgetAmount").value = 20000;
      setBudgetAmount(20000);
    } else {
      setBudgetAmount(document.getElementById("inputBudgetAmount").value);
    }
  }

  function updateNewInputValue () {
    if(document.getElementById("inputNewValue").value > document.getElementById("inputBudgetAmount").value) {
      document.getElementById("inputNewValue").value = document.getElementById("inputBudgetAmount").value;
    } else {
      setBudgetAmount(document.getElementById("inputNewValue").value);
    }
  }

  function updateBudgetVariables() {
    setSpentTotal(marketingTotal+financeTotal+salesTotal+humanResourcesTotal+itTotal);
    setRemainingTotal(budgetAmount - spentTotal);
  }

  function updateCurrency(event) {
    setCurrency(event.target.text);
  }

  function increaseAllocation (event) {
    if (event.target.title == "Marketing") {
      if(remainingTotal != 0) {
        setMarketingTotal(marketingTotal + 10);
      } else {
        document.getElementById('updateStatus').style.color = '#E25C69';
        setUpdateStatus('Not Enough Funds Left');
        setTimeout(() => {
          setUpdateStatus('');
        }, 3000);
      }
    } else if (event.target.title == "Finance") {
      if (remainingTotal != 0) {
        setFinanceTotal (financeTotal + 10);
      } else {
        document.getElementById('updateStatus').style.color = '#E25C69';
        setUpdateStatus('Not Enough Funds Left');
        setTimeout(() => {
          setUpdateStatus('');
        }, 3000);
      }
    } else if (event.target.title == "Sales") {
      if (remainingTotal != 0) {
        setSalesTotal (salesTotal + 10);
      } else {
        document.getElementById('updateStatus').style.color = '#E25C69';
        setUpdateStatus('Not Enough Funds Left');
        setTimeout(() => {
          setUpdateStatus('');
        }, 3000);
      }
    } else if (event.target.title == "HumanResources") {
      
      if (remainingTotal != 0) {
        setHumanResourcesTotal (humanResourcesTotal + 10); 
      } else {
        document.getElementById('updateStatus').style.color = '#E25C69';
        setUpdateStatus('Not Enough Funds Left');
        setTimeout(() => {
          setUpdateStatus('');
        }, 3000);
      }
    } else if (event.target.title == "IT") {
      if (remainingTotal != 0) {
        setItTotal (itTotal + 10);
      } else {
        document.getElementById('updateStatus').style.color = '#E25C69';
        setUpdateStatus('Not Enough Funds Left');
        setTimeout(() => {
          setUpdateStatus('');
        }, 3000);
      }
    }
    updateBudgetVariables();
  }

  function decreaseAllocation (event) {
    if (event.target.title == "Marketing") {
      if(marketingTotal!=0){
        setMarketingTotal(marketingTotal - 10);
      } else {
        document.getElementById('updateStatus').style.color = '#E25C69';
        setUpdateStatus('Minimum Reached');
        setTimeout(() => {
          setUpdateStatus('');
        }, 3000);
      }
    } else if (event.target.title == "Finance") {
      if(financeTotal!=0){
        setFinanceTotal(financeTotal- 10);
      } else {
        document.getElementById('updateStatus').style.color = '#E25C69';
        setUpdateStatus('Minimum Reached');
        setTimeout(() => {
          setUpdateStatus('');
        }, 3000);
      }
    } else if (event.target.title == "Sales") {
      if(salesTotal!=0){
        setSalesTotal(salesTotal- 10);
      } else {
        document.getElementById('updateStatus').style.color = '#E25C69';
        setUpdateStatus('Minimum Reached');
        setTimeout(() => {
          setUpdateStatus('');
        }, 3000);
      }
    } else if (event.target.title == "HumanResources") {
      if(humanResourcesTotal!=0){
        setHumanResourcesTotal(humanResourcesTotal- 10);
      } else {
        document.getElementById('updateStatus').style.color = '#E25C69';
        setUpdateStatus('Minimum Reached');
        setTimeout(() => {
          setUpdateStatus('');
        }, 3000);
      }
    } else if (event.target.title == "IT") {
      if(itTotal!=0){
        setItTotal(itTotal- 10);
      } else {
        document.getElementById('updateStatus').style.color = '#E25C69';
        setUpdateStatus('Minimum Reached');
        setTimeout(() => {
          setUpdateStatus('');
        }, 3000);
      }
    }
    updateBudgetVariables();
  }

  function clearAllocation (event) {
    if (event.target.title == "Marketing") {
      setMarketingTotal(0);
      document.getElementById('updateStatus').style.color = '#6C757D';
      setUpdateStatus('Value Cleared');
      setTimeout(() => {
        setUpdateStatus('');
      }, 3000);
    } else if (event.target.title == "Finance") {
      setFinanceTotal(0);
      document.getElementById('updateStatus').style.color = '#6C757D';
      setUpdateStatus('Value Cleared');
      setTimeout(() => {
        setUpdateStatus('');
      }, 3000);
    } else if (event.target.title == "Sales") {
      setSalesTotal(0);
      document.getElementById('updateStatus').style.color = '#6C757D';
      setUpdateStatus('Value Cleared');
      setTimeout(() => {
        setUpdateStatus('');
      }, 3000);
    } else if (event.target.title == "HumanResources") {
      setHumanResourcesTotal(0);
      document.getElementById('updateStatus').style.color = '#6C757D';
      setUpdateStatus('Value Cleared');
      setTimeout(() => {
        setUpdateStatus('');
      }, 3000);
    } else if (event.target.title == "IT") {
      setItTotal(0);
      document.getElementById('updateStatus').style.color = '#6C757D';
      setUpdateStatus('Value Cleared');
      setTimeout(() => {
        setUpdateStatus('');
      }, 3000);
    }
  }

  function changeAllocation() {
    let department = document.getElementById('chooseDepartment').value;
    let action = document.getElementById('chooseFunction').value;
    let newValue = parseFloat(document.getElementById('inputNewValue').value);

    if (action == 'Add') {
      if (remainingTotal == 0 || newValue > remainingTotal) {
        document.getElementById('updateStatus').style.color = '#E25C69';
        setUpdateStatus('Not Enough Funds Left');
        setTimeout(() => {
        setUpdateStatus('');
        }, 3000);
      } else {
        if (department == 'Marketing') {
          if (newValue > 0) {
            setMarketingTotal(marketingTotal + newValue);
          } else {
            document.getElementById('updateStatus').style.color = '#E25C69';
            setUpdateStatus('Error. Must be valid number');
            setTimeout(() => {
            setUpdateStatus('');
            }, 3000);
          }
        } else if (department == 'Finance') {
          if (newValue > 0) {
            setFinanceTotal(financeTotal + newValue);
          } else {
            document.getElementById('updateStatus').style.color = '#E25C69';
            setUpdateStatus('Error. Must be valid number');
            setTimeout(() => {
            setUpdateStatus('');
            }, 3000);
          }
        } else if (department == 'Sales') {
          if (newValue > 0) {
            setSalesTotal(salesTotal + newValue);
          } else {
            document.getElementById('updateStatus').style.color = '#E25C69';
            setUpdateStatus('Error. Must be valid number');
            setTimeout(() => {
            setUpdateStatus('');
            }, 3000);
          }
        } else if (department == 'HumanResources') {
          if (newValue > 0) {
            setHumanResourcesTotal(humanResourcesTotal + newValue);
          } else {
            document.getElementById('updateStatus').style.color = '#E25C69';
            setUpdateStatus('Error. Must be valid number');
            setTimeout(() => {
            setUpdateStatus('');
            }, 3000);
          }
        } else if (department == 'IT') {
          if (newValue > 0) {
            setItTotal(itTotal + newValue);
          } else {
            document.getElementById('updateStatus').style.color = '#E25C69';
            setUpdateStatus('Error. Must be valid number');
            setTimeout(() => {
            setUpdateStatus('');
            }, 3000);
          }
        }
      }
    } else if (action == 'Subtract') {
      if (spentTotal == 0) {
        document.getElementById('updateStatus').style.color = '#E25C69';
        setUpdateStatus('Nothing Spent');
        setTimeout(() => {
          setUpdateStatus('');
        }, 3000);
      } else {
        if (department == 'Marketing') {
          if (newValue >= marketingTotal) {
            setMarketingTotal(0);
          } else {
            if (newValue > 0) {
              setMarketingTotal(marketingTotal - newValue);
            } else {
              document.getElementById('updateStatus').style.color = '#E25C69';
              setUpdateStatus('Error. Must be valid number');
              setTimeout(() => {
              setUpdateStatus('');
              }, 3000);
            }
          }
        } else if (department == 'Finance') {
          if (newValue >= financeTotal) {
            setFinanceTotal(0);
          } else {
            if (newValue > 0) {
              setFinanceTotal(financeTotal - newValue);
            } else {
              document.getElementById('updateStatus').style.color = '#E25C69';
              setUpdateStatus('Error. Must be valid number');
              setTimeout(() => {
              setUpdateStatus('');
              }, 3000);
            }
          }
        } else if (department == 'Sales') {
          if (newValue >= salesTotal) {
            setSalesTotal(0);
          } else {
            if (newValue > 0) {
              setSalesTotal(salesTotal - newValue);
            } else {
              document.getElementById('updateStatus').style.color = '#E25C69';
              setUpdateStatus('Error. Must be valid number');
              setTimeout(() => {
              setUpdateStatus('');
              }, 3000);
            }
          }
        } else if (department == 'HumanResources') {
          if (newValue >= humanResourcesTotal) {
            setHumanResourcesTotal(0);
          } else {
            if (newValue > 0) {
              setHumanResourcesTotal(humanResourcesTotal - newValue);
            } else {
              document.getElementById('updateStatus').style.color = '#E25C69';
              setUpdateStatus('Error. Must be valid number');
              setTimeout(() => {
              setUpdateStatus('');
              }, 3000);
            }
          }
        } else if (department == 'IT') {
          if (newValue >= itTotal) {
            setItTotal(0);
          } else {
            if (newValue > 0) {
              setItTotal(itTotal - newValue);
            } else {
              document.getElementById('updateStatus').style.color = '#E25C69';
              setUpdateStatus('Error. Must be valid number');
              setTimeout(() => {
              setUpdateStatus('');
              }, 3000);
            }
          }
        }
      }
    } else if (action == 'NewValue') {
      if (department == 'Marketing') {
        if (newValue > (remainingTotal + marketingTotal)) {
          document.getElementById('updateStatus').style.color = '#E25C69';
          setUpdateStatus('Not Enough Funds Left');
          setTimeout(() => {
          setUpdateStatus('');
          }, 3000);
        } else {
          if (newValue > 0) {
            setMarketingTotal(newValue);
          } else {
            document.getElementById('updateStatus').style.color = '#E25C69';
            setUpdateStatus('Error. Must be valid number');
            setTimeout(() => {
            setUpdateStatus('');
            }, 3000);
          }
        }
      } else if (department == 'Finance') {
        if (newValue > (remainingTotal + financeTotal)) {
          document.getElementById('updateStatus').style.color = '#E25C69';
          setUpdateStatus('Not Enough Funds Left');
          setTimeout(() => {
          setUpdateStatus('');
          }, 3000);
        } else {
          if (newValue > 0) {
            setFinanceTotal(newValue);
          } else {
            document.getElementById('updateStatus').style.color = '#E25C69';
            setUpdateStatus('Error. Must be valid number');
            setTimeout(() => {
            setUpdateStatus('');
            }, 3000);
          }
        }
      } else if (department == 'Sales') {
        if (newValue > (remainingTotal + salesTotal)) {
          document.getElementById('updateStatus').style.color = '#E25C69';
          setUpdateStatus('Not Enough Funds Left');
          setTimeout(() => {
          setUpdateStatus('');
          }, 3000);
        } else {
          if (newValue > 0) {
            setSalesTotal(newValue);
          } else {
            document.getElementById('updateStatus').style.color = '#E25C69';
            setUpdateStatus('Error. Must be valid number');
            setTimeout(() => {
            setUpdateStatus('');
            }, 3000);
          }
        }
      } else if (department == 'HumanResources') {
        if (newValue > (remainingTotal + humanResourcesTotal)) {
          document.getElementById('updateStatus').style.color = '#E25C69';
          setUpdateStatus('Not Enough Funds Left');
          setTimeout(() => {
          setUpdateStatus('');
          }, 3000);
        } else {
          if (newValue > 0) {
            setHumanResourcesTotal(newValue);
          } else {
            document.getElementById('updateStatus').style.color = '#E25C69';
            setUpdateStatus('Error. Must be valid number');
            setTimeout(() => {
            setUpdateStatus('');
            }, 3000);
          }
        }
      } else if (department == 'IT') {
        if (newValue > (remainingTotal + itTotal)) {
          document.getElementById('updateStatus').style.color = '#E25C69';
          setUpdateStatus('Not Enough Funds Left');
          setTimeout(() => {
          setUpdateStatus('');
          }, 3000);
        } else {
          if (newValue > 0) {
            setItTotal(newValue);
          } else {
            document.getElementById('updateStatus').style.color = '#E25C69';
            setUpdateStatus('Error. Must be valid number');
            setTimeout(() => {
            setUpdateStatus('');
            }, 3000);
          }
        }
      }
    }
  }

  return (
    <div className="container mt-3">
      <header>
        <h1>Company's Budget Allocation</h1>
      </header>
      <main>
        <div id='top4Divs' className='mt-4 d-grid align-items-center' style={{gridTemplateColumns: '2fr 2fr 2fr 1fr'}}>
          <div className='rounded d-grid align-items-center' style={{gridTemplateColumns: '1fr 1fr', backgroundColor: '#E3E4E6', height: '55px',width:'95%'}}>
            <label htmlFor="inputBudgetAmount" className='pe-3 text-end'>Budget:</label>
            <div className='d-flex flex-row align-items-center'>
              <span className='pe-1'>{currency.charAt(0)}</span>
              <input 
                id="inputBudgetAmount" 
                className='ms-1 me-4 px-2' 
                style={{width:'100%', height:'30px'}}
                type="number" name="inputBudgetAmount" 
                min={spentTotal}
                defaultValue={spentTotal}
                max={20000}
                step={10}
                onChange={updateBudgetAmount}
                />
            </div>
          </div>
          <div className='rounded d-grid align-items-center' style={{gridTemplateColumns: '1fr 1fr', backgroundColor: '#D2E8DE', height: '55px',width:'95%'}}>
            <label htmlFor="inputBudgetAmount" className='pe-3 text-end'>Remaining:</label>
            <div className='d-flex flex-row'>
              <span className='pe-1'>{currency.charAt(0)}</span>
              <span>{remainingTotal}</span>
            </div>
          </div>
          <div className='rounded d-grid align-items-center' style={{gridTemplateColumns: '1fr 1fr', backgroundColor: '#D0E3FF', height: '55px',width:'95%'}}>
            <label htmlFor="inputBudgetAmount" className='pe-3 text-end'>Spent So Far:</label>
            <div className='d-flex flex-row'>
              <span className='pe-1'>{currency.charAt(0)}</span>
              <span>{spentTotal}</span>
            </div>
          </div>
          <div className="dropdown rounded" style={{backgroundColor:'#92E498'}}>
            <button className="text-light btn dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Currency ( {currency} )
            </button>
            <ul className="dropdown-menu border-0" style={{backgroundColor:'#92E498'}}>
              <li><a onClick={updateCurrency} className="dropdown-item">$ Dollar</a></li>
              <li><a onClick={updateCurrency} className="dropdown-item" href="#">£ Pound</a></li>
              <li ><a onClick={updateCurrency} className="dropdown-item" href="#">€ Euro</a></li>
              <li><a onClick={updateCurrency} className="dropdown-item" href="#">₹ Rupee</a></li>
            </ul>
          </div>
        </div>

        <div className='mt-5' id='Allocation-Div'>
          <h2 className='w-100 position-relative'>
            Allocation<span id='updateStatus' className='position-absolute top-50 translate-middle-y end-0 fs-6'>{updateStatus}</span>
          </h2>
          <table className='w-100'>
            <thead>
              <tr>
                <th>Department</th>
                <th>Allocated Budget</th>
                <th className='text-center'>Increase by 10</th>
                <th className='text-center'>Decrease by 10</th>
                <th className='text-center'>Clear</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Marketing</td>
                <td>
                  {currency.charAt(0)}
                  <span className='ms-2'></span>
                  {marketingTotal}
                </td>
                <td className='position-relative'><i id='AllocationIcons' className="bi bi-circle-fill fs-1 translate-middle start-50 d-flex align-items-center justify-content-center position-absolute" style={{color:'#4CAB59'}}><i title='Marketing' onClick={increaseAllocation} className="bi bi-plus position-absolute fs-1 text-white"></i></i>
                </td>
                <td className='position-relative'><i id='AllocationIcons' className="bi bi-circle-fill fs-1 translate-middle start-50 text-danger d-flex align-items-center justify-content-center position-absolute"><i title='Marketing' onClick={decreaseAllocation} className="bi bi-dash position-absolute fs-1 text-white"></i></i>
                </td>
                <td className='position-relative'><i id='AllocationIcons' className="bi bi-circle-fill fs-5 translate-middle start-50 text-secondary d-flex align-items-center justify-content-center position-absolute"><i title='Marketing' onClick={clearAllocation} className="bi bi-x fs-5 text-white position-absolute"></i></i>
                </td>
              </tr>
              <tr>
                <td>Finance</td>
                <td>
                  {currency.charAt(0)}
                  <span className='ms-2'></span>
                  {financeTotal}
                </td>
                <td className='position-relative'><i id='AllocationIcons' className="bi bi-circle-fill fs-1 translate-middle start-50 d-flex align-items-center justify-content-center position-absolute" style={{color:'#4CAB59'}}><i title='Finance' onClick={increaseAllocation} className="bi bi-plus position-absolute fs-1 text-white"></i></i>
                </td>
                <td className='position-relative'><i id='AllocationIcons' className="bi bi-circle-fill fs-1 translate-middle start-50 text-danger d-flex align-items-center justify-content-center position-absolute"><i title='Finance' onClick={decreaseAllocation} className="bi bi-dash position-absolute fs-1 text-white"></i></i>
                </td>
                <td className='position-relative'><i id='AllocationIcons' className="bi bi-circle-fill fs-5 translate-middle start-50 text-secondary d-flex align-items-center justify-content-center position-absolute"><i title='Finance' onClick={clearAllocation} className="bi bi-x fs-5 text-white position-absolute"></i></i>
                </td>
              </tr>
              <tr>
                <td>Sales</td>
                <td>
                  {currency.charAt(0)}
                  <span className='ms-2'></span>
                  {salesTotal}
                </td>
                <td className='position-relative'><i id='AllocationIcons' className="bi bi-circle-fill fs-1 translate-middle start-50 d-flex align-items-center justify-content-center position-absolute" style={{color:'#4CAB59'}}><i title='Sales' onClick={increaseAllocation} className="bi bi-plus position-absolute fs-1 text-white"></i></i>
                </td>
                <td className='position-relative'><i id='AllocationIcons' className="bi bi-circle-fill fs-1 translate-middle start-50 text-danger d-flex align-items-center justify-content-center position-absolute"><i title='Sales' onClick={decreaseAllocation} className="bi bi-dash position-absolute fs-1 text-white"></i></i>
                </td>
                <td className='position-relative'><i id='AllocationIcons' className="bi bi-circle-fill fs-5 translate-middle start-50 text-secondary d-flex align-items-center justify-content-center position-absolute"><i title='Sales' onClick={clearAllocation} className="bi bi-x fs-5 text-white position-absolute"></i></i>
                </td>
              </tr>
              <tr>
                <td>Human Resources</td>
                <td>
                  {currency.charAt(0)}
                  <span className='ms-2'></span>
                  {humanResourcesTotal}
                </td>
                <td className='position-relative'><i id='AllocationIcons' className="bi bi-circle-fill fs-1 translate-middle start-50 d-flex align-items-center justify-content-center position-absolute" style={{color:'#4CAB59'}}><i title='HumanResources' onClick={increaseAllocation} className="bi bi-plus position-absolute fs-1 text-white"></i></i>
                </td>
                <td className='position-relative'><i id='AllocationIcons' className="bi bi-circle-fill fs-1 translate-middle start-50 text-danger d-flex align-items-center justify-content-center position-absolute"><i title='HumanResources' onClick={decreaseAllocation} className="bi bi-dash position-absolute fs-1 text-white"></i></i>
                </td>
                <td className='position-relative'><i id='AllocationIcons' className="bi bi-circle-fill fs-5 translate-middle start-50 text-secondary d-flex align-items-center justify-content-center position-absolute"><i title='HumanResources' onClick={clearAllocation} className="bi bi-x fs-5 text-white position-absolute"></i></i>
                </td>
              </tr>
              <tr>
                <td>IT</td>
                <td>
                  {currency.charAt(0)}
                  <span className='ms-2'></span>
                  {itTotal}
                </td>
                <td className='position-relative'><i id='AllocationIcons' className="bi bi-circle-fill fs-1 translate-middle start-50 d-flex align-items-center justify-content-center position-absolute" style={{color:'#4CAB59'}}><i title='IT' onClick={increaseAllocation} className="bi bi-plus position-absolute fs-1 text-white"></i></i>
                </td>
                <td className='position-relative'><i id='AllocationIcons' className="bi bi-circle-fill fs-1 translate-middle start-50 text-danger d-flex align-items-center justify-content-center position-absolute"><i title='IT' onClick={decreaseAllocation} className="bi bi-dash position-absolute fs-1 text-white"></i></i>
                </td>
                <td className='position-relative'><i id='AllocationIcons' className="bi bi-circle-fill fs-5 translate-middle start-50 text-secondary d-flex align-items-center justify-content-center position-absolute"><i title='IT' onClick={clearAllocation} className="bi bi-x fs-5 text-white position-absolute"></i></i>
                </td>
              </tr>
            </tbody>
          </table>

        </div>

        <div className='my-5' id='Change-Allocation-Div'>
          <h2>Change Allocation</h2>
          <form className='d-lg-flex align-items-center mt-4' onSubmit={null}>
            <div className='d-flex me-2 mt-2'>
              <label style={{width:'120px'}} className='text-white text-center p-1 px-3 me-2 bg-secondary' htmlFor="chooseDepartment">Department</label>
              <select className='py-1 ps-2' name="chooseDepartment" id="chooseDepartment">
                <option value="Marketing">Marketing</option>
                <option value="Finance">Finance</option>
                <option value="Sales">Sales</option>
                <option value="HumanResources">Human Resources</option>
                <option value="IT">IT</option>
              </select>
            </div>
            <div className='d-flex me-5 align-items-center me-2 mt-2'>
              <label style={{width:'120px'}} className='text-white text-center p-1 px-3 me-2 bg-secondary' htmlFor="chooseFunction">Allocation</label>
              <select className='py-1 ps-2' name="chooseFunction" id="chooseFunction">
                <option value="Add">Add</option>
                <option value="Subtract">Subtract</option>
                <option value="NewValue">New Value</option>
              </select>
              <label className='ms-2' htmlFor="inputNewValue">{currency.charAt(0)}</label>
              <input 
                className='ms-2 px-2'
                type="number"
                name="inputNewValue"
                id="inputNewValue"
                style={{width:'150px', appearance:'textfield'}}
                max='20000'
                onChange={updateNewInputValue}
                />
            </div>
            <div className='d-flex mt-2'>
              <button className='btn btn-primary' type='button' onClick={changeAllocation}>Save</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
