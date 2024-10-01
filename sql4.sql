-- 1. List all patients and their appointments, including patients who have never had an appointment.
SELECT * FROM PATIENTS P
LEFT JOIN APPOINTMENTS A
ON P.PATIENTID= A.PATIENTID;

-- 2. Display all doctors and their scheduled appointments, including doctors without any appointments.
SELECT * FROM DOCTORS D
LEFT JOIN APPOINTMENTS A
ON D.DOCTORID=A.DOCTORID

-- 3. Show all medications and the patients they've been prescribed to, including medications that haven't been prescribed.
SELECT * FROM MEDICATIONS M
LEFT JOIN PRESCRIPTIONS P
ON M.MEDICATIONID=P.MEDICATIONID

-- 4. List all possible patient-doctor combinations, regardless of whether an appointment has occurred.
SELECT P.PatientID, P.PatientName, D.DoctorID, D.DoctorName
FROM Patients P
CROSS JOIN Doctors D;

-- 5. Display all prescriptions with patient and medication information, including prescriptions where either the patient or medication information is missing.
SELECT *
FROM Prescriptions R
LEFT JOIN Patients P ON R.PatientID = P.PatientID
LEFT JOIN Medications M ON R.MedicationID = M.MedicationID;

-- 6. Show all patients who have never been prescribed any medication, along with their appointment history.
SELECT *
FROM PATIENTS P
LEFT JOIN PRESCRIPTIONS R ON P.PATIENTID= R.PATIENTID
LEFT JOIN APPOINTMENTS A ON P.PATIENTID=A.PATIENTID
WHERE R.PATIENTID= NULL

-- 7. List all doctors who have appointments in the next week, along with the patients they're scheduled to see.

SELECT D.DoctorID,D.DoctorName,D.Specialty,P.PatientID,P.PatientName,A.AppointmentDate
FROM Doctors D
LEFT JOIN Appointments A ON D.DoctorID = A.DoctorID
LEFT JOIN Patients P ON P.PatientID = A.PatientID
WHERE DATEPART(WEEK,A.AppointmentDate) = DATEPART(WEEK,GETDATE()) +1;

-- 8. Display all medications prescribed to patients over 60 years old, including medications not prescribed to this age group.
SELECT M.MedicationID, M.MedicationName, M.DosageForm, P.PatientID, P.PatientName, P.DateOfBirth
FROM Medications M
LEFT JOIN Prescriptions R ON M.MedicationID = R.MedicationID
LEFT JOIN Patients P ON R.PatientID = P.PatientID 
WHERE P.PatientID IS NULL OR DATEDIFF(YEAR, P.DateOfBirth, GETDATE()) > 60
ORDER BY M.MedicationID;

-- 9. Show all appointments from last year and any associated prescription information.
SELECT A.APPOINTMENTID,P.PATIENTID,A.APPOINTMENTDATE FROM APPOINTMENTS A
LEFT JOIN PRESCRIPTIONS P ON A.PATIENTID=P.PATIENTID
WHERE YEAR(GETDATE())-1=YEAR(APPOINTMENTDATE)

-- 10. List all possible specialty-medication combinations, regardless of whether a doctor of that specialty has prescribed that medication.
SELECT D.SPECIALTY, M.MEDICATIONNAME
FROM DOCTORS D
CROSS JOIN MEDICATIONS M;

---------------------------------------------------------------------------------------------------------------------------------

-- 1. List all products with their category names, including products without a category.
SELECT P.PRODUCTNAME, C.CATEGORYNAME
FROM PROD P
LEFT JOIN CATEGORIES C ON P.CATEGORYID=C.CATEGORYID;

-- 2. Display all customers and their order history, including customers who haven't placed any orders.
SELECT C.CUSTOMERNAME, O.ORDERID
FROM CUSTOMER C
LEFT JOIN ORD O ON C.CUSTOMERID=O.CUSTOMERID

-- 3. Show all categories and the products in each category, including categories without any products.
SELECT C.CATEGORYNAME,P.PRODUCTNAME
FROM CATEGORIES C
LEFT JOIN PROD P ON C.CATEGORYID=P.PRODUCTID;

-- 4. List all possible customer-product combinations, regardless of whether a purchase has occurred.
SELECT C.CUSTOMERNAME,P.PRODUCTNAME
FROM CUSTOMER C
CROSS JOIN PROD P

-- 5. Display all orders with customer and product information, including orders where either the customer or product information is missing.
SELECT O.ORDERID,C.CUSTOMERNAME,P.PRODUCTNAME FROM ORD O
LEFT JOIN ORDERDETAILS OD ON O.ORDERID=OD.ORDERID 
LEFT JOIN CUSTOMER C ON C.CUSTOMERID=O.CUSTOMERID
LEFT JOIN PROD P ON P.PRODUCTID=OD.PRODUCTID;

-- 6. Show all products that have never been ordered, along with their category information.
SELECT P.PRODUCTNAME,C.CATEGORYNAME FROM PROD P
LEFT JOIN CATEGORIES C ON P.CategoryID=C.CategoryID
WHERE P.PRODUCTID NOT IN (SELECT PRODUCTID FROM ORDERDETAILS);

-- 7. List all customers who have placed orders in the last week, along with the products they've purchased.

SELECT C.CustomerID,C.CustomerName,P.ProductName
FROM Customer C
LEFT JOIN Ord O ON C.CustomerID = O.CustomerID
LEFT JOIN OrderDetails OD ON O.OrderID = OD.OrderID
LEFT JOIN Prod P ON P.ProductID = OD.ProductID
WHERE DATEPART(WEEK, O.OrderDate) = DATEPART(WEEK, GETDATE()) - 1;
    

-- 8. Display all categories with products priced over $100, including categories without such products.
SELECT C.CATEGORYNAME,P.PRODUCTNAME ,P.PRICE
FROM CATEGORIES C
LEFT JOIN PROD P ON P.CATEGORYID=C.CATEGORYID
WHERE P.PRODUCTNAME IS NULL OR P.PRICE>100

-- 9. Show all orders placed before 2023 and any associated product information.
SELECT O.ORDERID,O.ORDERDATE FROM ORD O
JOIN ORDERDETAILS OD ON OD.ORDERID=O.ORDERID
JOIN PROD P ON P.PRODUCTID=OD.PRODUCTID
WHERE YEAR(O.ORDERDATE) < 2023;

-- 10. List all possible category-customer combinations, regardless of whether the customer has purchased a product from that category.

SELECT C.CATEGORYNAME,P.CUSTOMERNAME 
FROM CATEGORIES C
CROSS JOIN CUSTOMER P
