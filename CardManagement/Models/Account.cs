using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CardManagement.Models
{
    public enum AccountType
    {
        Debit,
        Credit
    }
    public class Account
    {
        private static int acccount=0;
        public string Id { get; set; }
        public string AccountNumber { get; set; }

        public AccountType AccountType { get; set; }

        public double Balance { get; set; }

        public virtual List<Transaction> Transactions { get; set; } = new List<Transaction>();

        public Account() 
        {
            acccount++;
            Id="Acc"+(1000+acccount).ToString();
            
        }

        public Account( string accountNumber, AccountType accountType, double balance):this()
        {
            
            AccountNumber = accountNumber;
            AccountType = accountType;
            Balance = balance;
        }

        public void AddTransaction(DateTime transactionDate, TransactionType transactionType, double amount, string description)
        {
            Transactions.Add(new Transaction(transactionDate, transactionType, amount, description));
            if (transactionType == TransactionType.Deposit)
            {
                Console.WriteLine($"For transaction in account: {Id}");
                Balance += amount;
                Console.WriteLine($"Balance is: {Balance}");
            }
            else
            {
                if (transactionType == TransactionType.Withdrawal || transactionType == TransactionType.Transfer)
                {
                    Console.WriteLine($"For transaction in account: {Id}");
                    Balance -= amount;
                    if (Balance < 0)
                    {
                        Console.WriteLine("Insufficient Balance");
                    }
                    else
                    Console.WriteLine($"Balance is: {Balance}");
                }
            }
        }

        public void DisplayTransaction()
        {
            Console.WriteLine($"Transactions for Account Number: {AccountNumber}");
            if (Transactions.Count == 0)
            {
                Console.WriteLine("  No transactions available.");
            }
            else
            {
                foreach (var transaction in Transactions)
                {
                    Console.WriteLine($"  ID: {transaction.Id}, Date: {transaction.TransactionDate}, Type: {transaction.TransactionType}, Amount: {transaction.Amount}, Description: {transaction.Description}");
                }
            }
        }
    }
}
