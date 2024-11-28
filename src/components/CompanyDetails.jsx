import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const CompanyDetails = ({company}) => {
    console.log(company);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {company.map((company, index) => (
      <Card
        key={index}
        className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
      >
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-teal-800">
            {company.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              <span className="font-medium text-teal-600">Founded: </span>
              {company.founded}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium text-teal-600">Industry: </span>
              {company.industry}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium text-teal-600">Employees: </span>
              {company.employees}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium text-teal-600">Website: </span>
              <a
                href={`https://${company.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline"
              >
                {company.website}
              </a>
            </p>
          </div>
          <p className="text-sm text-gray-600 mb-6">
            {company.description}
          </p>
          <div>
            <h3 className="text-lg font-semibold text-teal-800 mb-2">
              Key Metrics
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {company.keyMetrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-teal-50 rounded-lg p-4 text-center shadow-sm"
                >
                  <p className="text-sm font-medium text-teal-600">
                    {metric.label}
                  </p>
                  <p className="text-xl font-bold text-teal-800">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>

  )
}

export default CompanyDetails