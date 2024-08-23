import React from "react";

const ProjectOverview = () => {
  return (
    <div className="max-w-7xl mx-auto py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-center text-4xl md:text-5xl md:leading-tight font-bold capitalize text-primary">
          Project Overview
        </h1>
      </div>

      <div className="py-6 px-4 text-center space-y-4 max-w-6xl mx-auto">
        <p>
          Munca is a flexible plan management app that helps users log their
          expenses and manage their budgets. Munca takes a different approach to
          the budget, using intelligent algorithms to manage and track user
          spending. The Munca app is connected to the bank account so that users
          can track the expenditure of their funds and easily categorize the
          expenses.
        </p>
        <p>
          According to research, disability affects 4.3 million Australians.
          About 50,000 Australians with Short-Term Disabilities or Long-Term
          Disabilities will have access to the National Disability Insurance
          Scheme over the next five years.The Australian government provides
          funds to the parents of disabled children every year.Often, financial
          literacy leads to poor financial decisions, impulsive spending, less
          security, and more stress. This convenient software assists parents
          and fund holders in managing their insurance funds.
        </p>
        <p>
          This sustainable app helps users to track their funds, incomes, and
          expenditures. This app assists fund holders in monitoring their
          funding, budget making, and appointments. Plan managers can safely
          make and store the invoices in the app to fund their future
          expenditures and savings.
        </p>
      </div>

      <div>
        <img
          src="/images/case-studies/projectOverview.png"
          alt="Project Overview"
        />
      </div>
    </div>
  );
};

export default ProjectOverview;
