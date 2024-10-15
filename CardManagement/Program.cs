using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CardManagement.Models;

namespace CardManagement
{
    public class Program
    {
        static void Main(string[] args)
        {
            Customer customer1 = new Customer("Ram","St.101,Mumbai","ram@gmail.com","9207991234");
            customer1.AddAccount("111122",AccountType.Debit,0.00);
            customer1.AddAccount("111123",AccountType.Credit,0.00);
            Customer customer2 = new Customer("Sam", "St.102,Bangalore", "sam01@gmail.com", "7207991234");
            customer2.AddAccount("222111",AccountType.Credit,0.00);


            customer1.DisplayCustomerDetails();
            Console.WriteLine();
            customer2.DisplayCustomerDetails();

            // Add transactions for customer1's first account
            customer1.Accounts[0].AddTransaction(DateTime.Parse("2023-10-02"),TransactionType.Deposit, 1000.00, "Deposited");
            customer1.Accounts[1].AddTransaction(DateTime.Parse("2023-11-03"),TransactionType.Withdrawal, 500.00, "ATM Withdrawal");
            customer2.Accounts[0].AddTransaction(DateTime.Parse("2024-06-03"), TransactionType.Withdrawal, 500.00, "ATM Withdrawal");

            // Display transactions for customer1
            Console.WriteLine();
            customer1.DisplayTransactions();
            customer2.DisplayTransactions();

        }
    }
}
