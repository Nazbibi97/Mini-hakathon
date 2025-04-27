 import {
   onAuthStateChanged,
   doc,
   auth,
   getDoc,
   db,
 } from "../firebase.config.js";
 
 onAuthStateChanged(auth, async (user) => {
   if (user) {
     const uid = user.uid;
     const docRef = doc(db, "users", uid);
     const docSnap = await getDoc(docRef);
 
     if (docSnap.exists()) {
      let  currentUser = docSnap.data();
      console.log(currentUser);
      
      let username = document.getElementById("prof-username")
      let contact = document.getElementById("prof-contact")
      let email = document.getElementById("prof-email")
      let profImg = document.getElementById("profImg")
 
      if(username)username.value = currentUser.name
      if(contact)contact.value = currentUser.contact
      if(email)email.innerHTML = currentUser.email
      if(profImg) profImg.src = currentUser.proFileImg
 
     } else {
       console.log("No such document!");
     }
 
   } else {
 
     console.log("user signed out");
     if (window?.location?.pathname === "/html/profile.html") {
       console.log(">>>>> ", window.location);
       window.location.replace("/");
     }
 
   }
 });
 
 // Traffic Trends Chart
 const trafficChart = echarts.init(document.getElementById('trafficChart'));
 const trafficOption = {
     animation: false,
     tooltip: {
         trigger: 'axis',
         backgroundColor: 'rgba(255, 255, 255, 0.8)',
         borderColor: '#e5e7eb',
         textStyle: {
             color: '#1f2937'
         }
     },
     grid: {
         top: 10,
         right: 10,
         bottom: 30,
         left: 50
     },
     xAxis: {
         type: 'category',
         data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
         axisLine: {
             lineStyle: {
                 color: '#e5e7eb'
             }
         },
         axisLabel: {
             color: '#6b7280'
         }
     },
     yAxis: {
         type: 'value',
         axisLine: {
             show: false
         },
         axisLabel: {
             color: '#6b7280'
         },
         splitLine: {
             lineStyle: {
                 color: '#f3f4f6'
             }
         }
     },
     series: [
         {
             name: 'Sessions',
             type: 'line',
             smooth: true,
             data: [820, 932, 901, 1290, 1330, 1320, 1450],
             lineStyle: {
                 width: 3,
                 color: 'rgba(87, 181, 231, 1)'
             },
             symbol: 'none',
             areaStyle: {
                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                     {
                         offset: 0,
                         color: 'rgba(87, 181, 231, 0.3)'
                     },
                     {
                         offset: 1,
                         color: 'rgba(87, 181, 231, 0.1)'
                     }
                 ])
             }
         },
         {
             name: 'Unique Visitors',
             type: 'line',
             smooth: true,
             data: [620, 732, 701, 934, 1090, 1130, 1120],
             lineStyle: {
                 width: 3,
                 color: 'rgba(141, 211, 199, 1)'
             },
             symbol: 'none',
             areaStyle: {
                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                     {
                         offset: 0,
                         color: 'rgba(141, 211, 199, 0.3)'
                     },
                     {
                         offset: 1,
                         color: 'rgba(141, 211, 199, 0.1)'
                     }
                 ])
             }
         }
     ]
 };
 trafficChart.setOption(trafficOption);

 // Traffic Source Chart
 const sourceChart = echarts.init(document.getElementById('sourceChart'));
 const sourceOption = {
     animation: false,
     tooltip: {
         trigger: 'item',
         backgroundColor: 'rgba(255, 255, 255, 0.8)',
         borderColor: '#e5e7eb',
         textStyle: {
             color: '#1f2937'
         }
     },
     series: [
         {
             name: 'Traffic Source',
             type: 'pie',
             radius: ['45%', '70%'],
             center: ['50%', '50%'],
             avoidLabelOverlap: false,
             itemStyle: {
                 borderRadius: 8,
                 borderColor: '#fff',
                 borderWidth: 2
             },
             label: {
                 show: false
             },
             emphasis: {
                 label: {
                     show: false
                 }
             },
             labelLine: {
                 show: false
             },
             data: [
                 { value: 42, name: 'QR Code', itemStyle: { color: 'rgba(87, 181, 231, 1)' } },
                 { value: 31, name: 'Website', itemStyle: { color: 'rgba(141, 211, 199, 1)' } },
                 { value: 18, name: 'Direct Link', itemStyle: { color: 'rgba(251, 191, 114, 1)' } },
                 { value: 9, name: 'Others', itemStyle: { color: 'rgba(252, 141, 98, 1)' } }
             ]
         }
     ]
 };
 sourceChart.setOption(sourceOption);

 // Leads Chart
 const leadsChart = echarts.init(document.getElementById('leadsChart'));
 const leadsOption = {
     animation: false,
     tooltip: {
         trigger: 'axis',
         backgroundColor: 'rgba(255, 255, 255, 0.8)',
         borderColor: '#e5e7eb',
         textStyle: {
             color: '#1f2937'
         }
     },
     legend: {
         data: ['Visiting', 'Cart/Order', 'Image Download'],
         bottom: 0,
         textStyle: {
             color: '#6b7280'
         },
         itemWidth: 12,
         itemHeight: 12
     },
     grid: {
         top: 10,
         right: 10,
         bottom: 50,
         left: 50
     },
     xAxis: {
         type: 'category',
         data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
         axisLine: {
             lineStyle: {
                 color: '#e5e7eb'
             }
         },
         axisLabel: {
             color: '#6b7280'
         }
     },
     yAxis: {
         type: 'value',
         axisLine: {
             show: false
         },
         axisLabel: {
             color: '#6b7280'
         },
         splitLine: {
             lineStyle: {
                 color: '#f3f4f6'
             }
         }
     },
     series: [
         {
             name: 'Visiting',
             type: 'bar',
             stack: 'total',
             data: [120, 132, 101, 134, 90, 230],
             itemStyle: {
                 color: 'rgba(87, 181, 231, 1)',
                 borderRadius: [4, 4, 0, 0]
             }
         },
         {
             name: 'Cart/Order',
             type: 'bar',
             stack: 'total',
             data: [220, 182, 191, 234, 290, 330],
             itemStyle: {
                 color: 'rgba(141, 211, 199, 1)'
             }
         },
         {
             name: 'Image Download',
             type: 'bar',
             stack: 'total',
             data: [150, 232, 201, 154, 190, 330],
             itemStyle: {
                 color: 'rgba(251, 191, 114, 1)',
                 borderRadius: [0, 0, 4, 4]
             }
         }
     ]
 };
 leadsChart.setOption(leadsOption);

 // Resize charts when window resizes
 window.addEventListener('resize', function() {
     trafficChart.resize();
     sourceChart.resize();
     leadsChart.resize();
 });